import AnimatedElement from './AnimatedElement';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  center = false,
  light = false,
}: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {subtitle && (
        <AnimatedElement animation="fade-in">
          <h4 className={`text-lg font-semibold ${light ? 'text-secondary' : 'text-secondary'} mb-2`}>
            {subtitle}
          </h4>
        </AnimatedElement>
      )}
      <AnimatedElement animation="slide-up" delay={0.1}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${light ? 'text-white' : 'text-orange-900'}`}>
          {title}
        </h2>
      </AnimatedElement>
      {description && (
        <AnimatedElement animation="slide-up" delay={0.2}>
          <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        </AnimatedElement>
      )}
    </div>
  );
};

export default SectionTitle;