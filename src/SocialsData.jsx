import { FaLinkedin , FaGithub , FaEnvelope ,FaTwitter } from "react-icons/fa6";


export const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/smriti-singh-a06685257/', 
      icon: <FaLinkedin size={22} />, 
      color: 'group-hover:text-blue-400',
      glow: 'group-hover:shadow-blue-500/20'
    },
    { 
      name: 'Twitter', 
      href: 'https://x.com/sillymilllly', 
      icon: <FaTwitter size={22} />, 
      color: 'group-hover:text-emerald-400',
      glow: 'group-hover:shadow-emerald-500/20'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/smritisingh21', 
      icon: <FaGithub size={22} />, 
      color: 'group-hover:text-stone-100',
      glow: 'group-hover:shadow-white/10'
    },
    { 
      name: 'Email', 
      href: 'mailto:smriti.singh@example.com', 
      icon: <FaEnvelope size={22} />, 
      color: 'group-hover:text-amber-400',
      glow: 'group-hover:shadow-amber-500/20'
    },
  ];
