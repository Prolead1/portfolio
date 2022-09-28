import { FunctionComponent } from 'react';
import BtnNav from './BtnNav';

interface INavbarProps {}

const Navbar: FunctionComponent<INavbarProps> = (props) => (
  <>
    <div className="flex flex-auto mx-auto p-6 bg-gray-900 w-full min-w-max sticky">
      <BtnNav name="Rahul Thaker" animate="_" path="/" />
      <div className="float-right flex flex-auto flex-grow-0">
        <BtnNav name="About Me" path="/about" />
        <BtnNav name="Projects" path="/projects" />
        <BtnNav name="Skills" path="/skills" />
        <BtnNav name="Interests" path="/interests" />
        <BtnNav name="Testimonials" path="testimonials" />
        <BtnNav name="Contact" path="contact" />
      </div>
    </div>
    <hr className="text-gray-200" />
  </>
);

export default Navbar;
