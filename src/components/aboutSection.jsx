import AnimatedComponent from '../lib/AnimatedComponent';
import AnimatedSide from '../lib/AnimatedSide';

export default function AboutSection() {
   return (
      <section id="About">
         <AnimatedComponent>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center px-5 sm:px-52 min-h-screen py-5 sm:py-20'>
               <AnimatedSide from='left'>
                  <div>
                     <img src="/images/programmer.png" alt="programmer" className='w-[400px]' />
                  </div>
               </AnimatedSide>
               <div className="w-96 sm:w-[500px] text-center sm:text-left mt-5">
                  <h1 className="text-3xl font-bold font-mono mb-7 dark:text-slate-200">About me</h1>
                  <p className="text-md font-serif dark:text-slate-200 text-justify">
                     I graduated from Institut Teknologi Nasional Malang with a degree in Informatics Engineering. I
                     am passionate and enthusiastic about developing web applications. I ready to contribute with the skills I gained from a bootcamp at Rakamin.
                     I have experience building web applications using HTML, CSS, JavaScript, Tailwind CSS and React.js, and I am
                     familiar with tools like Git. I can create a restful API with Nodejs Expressjs with a Postgresql or My Sql databases.
                  </p>
               </div>
            </div>
         </AnimatedComponent>
      </section>
   )
}