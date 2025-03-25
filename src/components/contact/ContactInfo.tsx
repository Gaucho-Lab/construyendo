import { IconType } from 'react-icons';

interface ContactInfoProps {
  icon: IconType;
  title: string;
  content: string;
  secondLine?: string;
  link?: string;
}

const ContactInfo = ({ icon: Icon, title, content, secondLine, link }: ContactInfoProps) => {
  const renderContent = () => {
    if (link) {
      return (
        <a
          href={link}
          className="text-gray-600 hover:text-primary transition-colors"
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {content}
          {secondLine && <div>{secondLine}</div>}
        </a>
      );
    }

    return (
      <div className="text-gray-600">
        {content}
        {secondLine && <div>{secondLine}</div>}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start">
        <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-4">
          <Icon className="text-xl text-primary" />
        </div>
        <div>
          <h3 className="font-bold mb-2">{title}</h3>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;