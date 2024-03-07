import { useState, useRef, useEffect } from 'react';
import PageHeader from '@layouts/partials/PageHeader';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'; // Import Dialog components from Material-UI
import { FaEye } from 'react-icons/fa';
import FsLightbox from 'fslightbox-react';

const RamadanOfferWheel = ({ offers, classes }) => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [email, setEmail] = useState(''); // State for user's email
  const [verificationCode, setVerificationCode] = useState(''); // State for verification code
  const [congratulationModalOpen, setCongratulationModalOpen] = useState(false); // State for congratulation modal
  const [showVerificationCodeInput, setShowVerificationCodeInput] = useState(false); // State to control rendering of verification code input
  const canvasRef = useRef(null);
  const spinSpeed = 0.1; // Adjust spin speed as needed
  let spinAngle = 0;

  useEffect(() => {
    drawWheel();
  }, []);

  useEffect(() => {
    if (selectedOffer) {
      setCongratulationModalOpen(true); // Open congratulation modal when user receives an offer
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
    const ctx = canvas.getContext('2d');
    const numSegments = offers.length;
    const wheelRadius = Math.min(canvas.width, canvas.height) / 2 - 10;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const segmentAngle = (Math.PI * 2) / numSegments;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;

    offers.forEach((offer, index) => {
      const startAngle = angle + index * segmentAngle;
      const endAngle = angle + (index + 1) * segmentAngle;
      const segmentCenterAngle = startAngle + segmentAngle / 2;

      // Set the fill color based on the index
      ctx.fillStyle = index % 2 === 0 ? '#e06823' : '#4552a4';
      ctx.strokeStyle = '#fff';

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, wheelRadius, startAngle, endAngle);
      ctx.lineTo(centerX, centerY);
      ctx.fill();
      ctx.stroke();

      // Calculate position for text to be centered in the segment
      const textX = centerX + Math.cos(segmentCenterAngle) * (wheelRadius * 0.8); // Adjust font position within the segment
      const textY = centerY + Math.sin(segmentCenterAngle) * (wheelRadius * 0.8); // Adjust font position within the segment

      ctx.save();
      ctx.translate(textX, textY);
      ctx.rotate(segmentCenterAngle);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px Arial'; // Adjust font size as needed

      // Specify maximum width for the text within the segment
      const maxWidth = wheelRadius * segmentAngle * 0.9; // Adjust multiplier for padding
      const textToFit = offer.title;

      // Wrap text within the segment
      wrapText(ctx, textToFit, 0, 0, maxWidth, 20); // Adjust line height as needed

      ctx.restore();
    });
  };

  // Function to wrap text within a given width
  function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/email-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setShowVerificationCodeInput(true); // Show verification code input after successful email submission
      } else {
        // Show error message or handle accordingly
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message or handle accordingly
    }
  };

  const handleVerificationCodeSubmit = async (event) => {
    event.preventDefault();
    // Handle verification code submission, e.g., validate and process
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
        <div className='flex justify-center'>
          {/* Conditional rendering based on showVerificationCodeInput state */}
          {!showVerificationCodeInput ? (
            <form onSubmit={handleEmailSubmit} className="mt-4 w-1/2">
              <TextField
                type="email"
                label="Enter your email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                required
                className="mb-2"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerificationCodeSubmit} className="mt-4 w-1/2">
              <TextField
                type="text"
                label="Enter verification code"
                variant="outlined"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                fullWidth
                required
                className="mb-2"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Verify
              </Button>
            </form>
          )}
        </div>
        <div className="mx-auto mt-10">
          <div className="mb-8 flex justify-center">
            <canvas ref={canvasRef} width={400} height={400} />
          </div>
          <div className='text-center'>
            <button
              onClick={handleWheelSpin}
              type="button"
              className="spin-button w-1/2"
              disabled={isSpinning}
            >
              Spin the Wheel
            </button>
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
