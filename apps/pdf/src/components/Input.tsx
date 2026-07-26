import type { InputProps } from 'react-html-props'

interface TextFieldProps extends InputProps {
  id: string
  label: string
}

export default function TextField({ id, label, ...props }: TextFieldProps) {
  return (
    <label htmlFor={id}>
      <span className="sr-only">{label}</span>
      <input
        className="block w-full rounded-sm border border-greyscale-grey px-3 py-2.5 outline-none placeholder:text-greyscale-dark-grey focus:border-primary-main focus:ring-primary-main"
        id={id}
        name={label}
        {...props}
      />
    </label>
  )
}
