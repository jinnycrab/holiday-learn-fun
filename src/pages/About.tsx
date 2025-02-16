
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Why We Started Build Section */}
        <motion.section 
          className="container py-20"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img
                src="/lovable-uploads/b235711a-f628-48e4-8700-52914ec41fd1.png"
                alt="Students learning"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl font-bold font-general-sans">Why We Started Build</h2>
              <p className="text-lg text-muted-foreground">
                Build was founded with a vision to transform how students approach innovation and problem-solving. We believe in hands-on learning experiences that bridge the gap between theoretical knowledge and real-world application. Our program integrates design thinking, technology, and entrepreneurship to prepare students for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Vision Section */}
        <motion.section 
          className="container py-20 bg-white"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Our Vision
                </span>
              </div>
              <h2 className="text-3xl font-bold font-general-sans">Joyful Learning by Innovating</h2>
              <p className="text-lg text-muted-foreground">
                At Build, we envision a future where every student has the opportunity to develop innovative solutions for real-world challenges. We aim to cultivate a mindset of continuous learning, creativity, and resilience. Through our unique program methodology, we empower students to become confident problem-solvers and future leaders in their chosen fields.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img
                src="/lovable-uploads/b235711a-f628-48e4-8700-52914ec41fd1.png"
                alt="Students collaborating"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.section>

        {/* Our Founders Section */}
        <motion.section 
          className="py-20 bg-accent/10"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="container">
            <div className="text-center mb-12">
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Our Founders
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-6 font-general-sans">An Industry-Education Marriage</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the founders of behind Build who are passionate about transforming education and bridging the academic-industry divide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Founder 1 */}
              <motion.div 
                className="space-y-4"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="relative h-[300px] overflow-hidden rounded-2xl">
                    <img
                      src="/lovable-uploads/b235711a-f628-48e4-8700-52914ec41fd1.png"
                      alt="Founder 1"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/jinyichua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold font-general-sans">Jin Yi Chua</h3>
                <p className="text-muted-foreground">
                 Jin Yi has worked at the intersection of research, innovation and strategy since he graduated as the Valedictorian and Gold Medalist at Nanyang Technological University. He led research and innovation projects at Samsung Electronics' Regional Product Innovation Team, and previously consulted for Fortune 500 companies like Google, ByteDance, Unilever and more. He has also taught at the undergraduate level at LASALLE School of the Arts and Macau University.
                </p>
              </motion.div>

              {/* Founder 2 */}
              <motion.div 
                className="space-y-4"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="relative h-[300px] overflow-hidden rounded-2xl">
                    <img
                      src="/lovable-uploads/b235711a-f628-48e4-8700-52914ec41fd1.png"
                      alt="Founder 2"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/shi-han-ang?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold font-general-sans">Ash Ang</h3>
                <p className="text-muted-foreground">
                  Ash is an education specialist in EdTech innovation. He graduated from Stanford University Graduate School of Business’ Ignite Executive Program and with a MS in Learning Design and Technology from the Graduate School of Education. Formerly a Singaporean educator, government scholar, and an AI Mentor at Stanford Accelerator for Learning, Ash brings his experience in instructional design to Build. 
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer onCategoryFilter={() => {}} />
    </div>
  );
};

export default About;

