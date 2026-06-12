import ecommerceImg from '../assets/e-commerce.png';
import dashboardImg from '../assets/dashboard.png';
import restaurantImg from '../assets/restaurant.png';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Built a fully responsive E-commerce web application with dynamic product management, advanced filtering, and interactive product details. Developed a seamless shopping cart featuring live price updates and quantity managemen',
    image: ecommerceImg,
    techStack: ['React', 'Tailwind CSS', 'Context API', 'Routeur'],
    liveUrl: 'https://mariam2sakr.github.io/E-commerce-react/',
    githubUrl: 'https://github.com/mariam2sakr/E-commerce-react',
    featured: true,
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description:
      'Built an enterprise-grade admin dashboard with secure authentication, full CRUD operations for users and products, advanced filtering, and interactive analytics visualizations using Recharts.',
    image: dashboardImg,
    techStack: ['React', 'JavaScript', 'Recharts', 'Vanilla CSS'],
    liveUrl: 'https://mariam2sakr.github.io/Admin-Management-Dashboard/',
    githubUrl: 'https://github.com/mariam2sakr/Admin-Management-Dashboard',
    featured: true,
  },
  {
    id: 3,
    title: 'Burger Restaurant Website',
    description:
      'Developed a restaurant web application featuring a dynamic menu system, persistent shopping cart functionality, and a geolocation-based branch locator with a validated contact form.',
    image: restaurantImg,
    techStack: ['React', 'LocalStorage', 'Media Queries'],
    liveUrl: 'https://mariam2sakr.github.io/Wahmy-Burger-Restaurant/',
    githubUrl: 'https://github.com/mariam2sakr/Wahmy-Burger-Restaurant',
    featured: true,
  }
];

export default projects;

