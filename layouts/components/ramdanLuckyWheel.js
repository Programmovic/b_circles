import { useState, useRef, useEffect } from 'react';
import PageHeader from '@layouts/partials/PageHeader';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'; // Import Dialog components from Material-UI
import confetti from 'canvas-confetti';



const RamadanOfferWheel = ({ offers, classes }) => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [congratulationModalOpen, setCongratulationModalOpen] = useState(false); // State for congratulation modal
  const [ipAddress, setIpAddress] = useState(''); // State for storing IP address
  const [hasOfferBefore, setHasOfferBefore] = useState(''); // State for storing IP address
  const [existingOffer, setExistingOffer] = useState({}); // State for storing IP address
  const canvasRef = useRef(null);
  const spinSpeed = 0.1; // Adjust spin speed as needed
  let spinAngle = 0;

  useEffect(() => {
    drawWheel();
    fetchIpAddress();
  }, []);
  useEffect(() => {
    { ipAddress && checkOffer(ipAddress) }
  }, [ipAddress, selectedOffer]);
  useEffect(() => {
    if (selectedOffer) {
      setCongratulationModalOpen(true);
      if (!hasOfferBefore) {
        saveOffer(selectedOffer);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    }
  }, [selectedOffer]);

  const handleWheelSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      spinWheel();
    }
  };

  const spinWheel = () => {
    const spinInterval = requestAnimationFrame(spinAnimation);
    const endTime = performance.now() + 3000; // Duration of spin (in milliseconds)

    function spinAnimation(timestamp) {
      const deltaTime = timestamp - endTime;
      spinAngle += spinSpeed;
      drawWheel(spinAngle);
      if (deltaTime < 0) {
        requestAnimationFrame(spinAnimation);
      } else {
        setIsSpinning(false);
        const randomIndex = Math.floor(Math.random() * offers.length);
        setSelectedOffer(offers[randomIndex]);
      }
    }
  };

  const drawWheel = (angle = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const numSegments = offers.length;
    const wheelRadius = Math.min(canvas.width, canvas.height) / 2 - 10;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  
    offers.forEach((offer, index) => {
      const segmentAngle = (Math.PI * 2) / numSegments;
      const startAngle = angle + index * segmentAngle;
      const endAngle = angle + (index + 1) * segmentAngle;
  
      // Segment coloring
      ctx.fillStyle = index % 2 === 0 ? 'rgb(224 104 35)' : 'rgb(69 82 164)'; // Alternating colors
  
      // Draw segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, wheelRadius, startAngle, endAngle);
      ctx.lineTo(centerX, centerY);
      ctx.fill();
  
      // Draw stroke
      ctx.strokeStyle = 'white'; // Stroke color
      ctx.lineWidth = 2; // Stroke width
      ctx.stroke();
  
      // Text
      ctx.fillStyle = 'white';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
  
      // Calculate text size and position
      const textAngle = startAngle + segmentAngle / 2;
      const textRadius = wheelRadius - 100; // Positioning text towards the edge of the segment
      const textX = centerX + Math.cos(textAngle) * textRadius;
      const textY = centerY + Math.sin(textAngle) * textRadius;
  
      // Wrap text
      const maxTextWidth = segmentAngle * wheelRadius * 0.8; // Maximum width of text
      const maxChars = Math.floor(maxTextWidth / ctx.measureText('W').width); // Estimate maximum number of characters
      const wrappedText = wrapText(offer.title, maxChars); // Wrap text
  
      // Draw wrapped text
      wrappedText.forEach((line, i) => {
        ctx.fillText(line, textX, textY + (i - Math.floor(wrappedText.length / 2)) * 16); // Adjust y-position for multiple lines
      });
    });
  };
  
  // Function to wrap text
  const wrapText = (text, maxChars) => {
    const words = text.split(' ');
    let line = '';
    const lines = [];
    words.forEach(word => {
      if (line.length + word.length <= maxChars) {
        line += (line === '' ? '' : ' ') + word;
      } else {
        lines.push(line);
        line = word;
      }
    });
    lines.push(line);
    return lines;
  };
  
  



  const fetchIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  const saveOffer = async (offer) => {
    try {
      const response = await fetch('/api/save-offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ip: ipAddress, offer }),
      });
      if (response.ok) {
        console.log('Offer saved successfully');
      } else {
        console.error('Failed to save offer');
      }
    } catch (error) {
      console.error('Error saving offer:', error);
    }
  };
  const checkOffer = async (ip) => {
    try {
      const response = await fetch('/api/check-offer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ip }),
      });
      const data = await response.json();

      setHasOfferBefore(data.hasOffer)
      setExistingOffer(data.offer)
      console.log(existingOffer)
    } catch (error) {
      console.error('Error checking offer:', error);
    }
  };
  const handleCloseCongratulationModal = () => {
    setCongratulationModalOpen(false);
  };

  return (
    <section className={`${classes} section`}>
      <div className="container">
        <PageHeader
          title="Ramadan Offers"
          image="/images/ramadan_bg.jpg"
          overlay=".5"
        />
        
        <div className="mx-auto mt-10">
          <div className="mb-8 flex justify-center">
            <canvas ref={canvasRef} width={600} height={600} />
          </div>
          <div className='text-center'>
            <Button
              onClick={handleWheelSpin}
              type="button"
              className="spin-button w-1/2"
              disabled={isSpinning}
              variant="outlined"
            >
              {hasOfferBefore ? `You Already Got: ${existingOffer.offer.title}` : `Get An Offer`}
            </Button>
            {selectedOffer && (
              <Dialog open={congratulationModalOpen} onClose={handleCloseCongratulationModal}>
                <DialogTitle>Congratulations!</DialogTitle>
                <DialogContent>
                  <p>You've won: {selectedOffer.title}</p>
                  <p>Description: {selectedOffer.description}</p>
                  {/* Add more details about the offer */}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseCongratulationModal} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RamadanOfferWheel;
