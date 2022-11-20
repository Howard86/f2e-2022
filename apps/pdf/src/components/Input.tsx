import { InputProps } from 'react-html-props'

interface TextFieldProps extends InputProps {
  id: string
  label: string
}

export default function TextField({ id, label, ...props }: TextFieldProps) {
  return (
    <label htmlFor={id}>
      <span className="sr-only">{label}</span>
      <input
        id={id}
        name={label}
        className="placeholder:text-greyscale-dark-grey border-greyscale-grey focus:border-primary-main focus:ring-primary-main block w-full rounded-sm border py-2.5 px-3 outline-none"
        {...props}
      />
    </label>
  )
}
