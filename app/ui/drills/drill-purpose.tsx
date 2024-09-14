import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function DrillPurpose({ purpose }: { purpose: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': purpose === 'learning',
          'bg-green-500 text-white': purpose === 'improving',
        },
      )}
    >
      {purpose === 'learning' ? (
        <>
          learning
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {purpose === 'improving' ? (
        <>
          improving
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
