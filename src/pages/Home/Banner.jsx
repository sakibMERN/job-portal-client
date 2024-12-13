import { easeIn, easeInOut, easeOut } from "motion";
import { motion } from "motion/react";
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1"> 
          <motion.img
            animate={{y: [0, 50, 0]}}
            transition={{duration: 10, delay:5, repeat: Infinity}}
            src={team2}
            className="max-w-sm w-64 rounded-t-[32px] rounded-br-[32px] border-l-[6px]  border-b-[6px] border-blue-500 shadow-2xl"
          />
          <motion.img
            animate={{x: [175, 225, 175]}}
            transition={{duration: 10, repeat: Infinity}}
            src={team1}
            className="max-w-sm w-64 rounded-t-[32px] rounded-br-[32px] border-l-[6px]  border-b-[6px] border-blue-500 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Latest Job For You!</h1>
          <motion.h1 
          animate={{x: [0, 100, 0], color: ['red']}} 
          transition={{duration: 10, delay:0 , ease: easeInOut, repeat: Infinity, repeatDelay:5}}
          className="text-5xl font-bold">Latest <motion.span 
          animate={{color: ['#ecff33', "#33ffe3", "#ff6133"]}}
          transition={{duration: 3, repeat: Infinity}}
          >Job</motion.span> For You!</motion.h1>
          
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
