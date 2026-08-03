import { FiInfo } from 'react-icons/fi';
import './ContentPending.css';

/**
 * Honest placeholder used wherever the source documents did not provide
 * actual copy. This is intentional: per project rules, content is never
 * invented. Replace the children with real content once supplied.
 */
const ContentPending = ({ label = 'Content not yet provided in source documents' }) => {
  return (
    <div className="content-pending" role="note">
      <FiInfo aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
};

export default ContentPending;
