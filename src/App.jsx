import { useState } from "react";

export default function ValentineMagic() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noStyle, setNoStyle] = useState({ top: "55vh", left: "55vw" });
  const [yesScale, setYesScale] = useState(1);

 const messages = [
  "Saying no is getting harder… 😌",
  "Why are you running from love? 🥺",
  "Just click YES already 😏",
  "This is embarrassing for NO 💔",
  "Okay stop playing… you love me ❤️",
  "The YES button is looking cute, right? 👀",
  "I can do this all day 😌",
  "NO is tired… are you? 😏",
  "At this point, you’re just flirting 💕",
  "Your mouse is clearly aiming for YES 😌",
  "Even the universe wants you to click YES 🌍",
  "Resistance is useless 😈",
  "This is your sign 💖",
  "Be brave. Choose love ❤️",
  "Come on… don’t be shy 😌",
  "YES is getting bigger for a reason 😏",
  "NO has officially given up 💔",
  "You know YES is the right answer 💘",
  "Stop teasing me now 🥺",
  "Okay fine… I love you TOO much ❤️❤️"
];


  const [messageIndex, setMessageIndex] = useState(0);

  const handleNoHover = () => {
    setNoStyle({
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
    });

    setYesScale((prev) => Math.min(prev + 0.15, 1.8));

    setMessageIndex((prev) =>
      prev < messages.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-red-300">

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl animate-float"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 6 + Math.random() * 5 + "s",
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {!yesClicked ? (
        <>
          {/* Card */}
          <div className="z-10 bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center">
            <h1 className="text-4xl font-extrabold mb-6 text-rose-600">
              Will you be my Valentine? 💘
            </h1>

            <p className="mb-8 text-gray-700 transition-all duration-300">
              {messages[messageIndex]}
            </p>

            {/* YES Button */}
            <button
              onClick={() => setYesClicked(true)}
              style={{ transform: `scale(${yesScale})` }}
              className="px-8 py-3 text-lg font-semibold rounded-full bg-red-500 text-white transition-transform duration-300 shadow-lg"
            >
              Yes ❤️
            </button>
          </div>

          {/* NO Button – Free Moving */}
          <button
            onMouseEnter={handleNoHover}
            style={{
              position: "absolute",
              top: noStyle.top,
              left: noStyle.left,
            }}
            className="px-8 py-3 text-lg rounded-full bg-gray-400 text-white cursor-not-allowed z-50"
          >
            No 💔
          </button>
        </>
      ) : (
        <div className="z-10 bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl text-center animate-fadeIn">
  <h1 className="text-4xl font-extrabold text-red-600 mb-4">
    Knew it 😌💖
  </h1>

  {/* 💋 Kiss / Chumi GIF */}
  <img
    src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3azFuMGVncTV2cDFyemQ5Z2UxYjk4Z2NsenNpdWR5YXZ0M3dxcmJqNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xOvhMKk3EyS1LKQtkK/giphy.gif"
    alt="Kiss"
    className="w-40 mx-auto mb-4"
  />

  <p className="text-xl text-gray-800 leading-relaxed">
    You tried saying no…
    <br />
    But love (and me) won ❤️
    <br />
    Come here… chumi for you 😘💕
  </p>

  <div className="mt-6 text-3xl animate-pulse">💞💞💞</div>
</div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(100vh) scale(0.6); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
