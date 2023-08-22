import React from 'react'

type Props = {
    inputRef?: React.LegacyRef<HTMLInputElement>
    textAreaRef?: React.LegacyRef<HTMLTextAreaElement>
    placeholder: string
    label: string
    parentClassName?: string
    labelClassName?: string
    inputClassName?: string
    numRows?: number
}

const LabelInput = ({
    inputRef,
    textAreaRef,
    placeholder,
    parentClassName,
    labelClassName,
    inputClassName,
    label,
    numRows,
}: Props) => {
    return (
        <div
            className={`flex flex-col gap-[8px] w-full items-start ${parentClassName}`}
        >
            <span className={`text-[12px] font-bold ${labelClassName}`}>
                {label}
            </span>
            {numRows || textAreaRef ? (
                <textarea
                    placeholder={placeholder}
                    ref={textAreaRef}
                    className={`w-full py-[8px] px-[16px] text-[13px] rounded-[4px] border border-[#828fa340] bg-transparent resize-none ${inputClassName}`}
                    rows={numRows ?? 2}
                />
            ) : (
                <input
                    placeholder={placeholder}
                    ref={inputRef}
                    className={`w-full py-[8px] px-[16px] text-[13px] rounded-[4px] border border-[#828fa340] bg-transparent ${inputClassName}`}
                />
            )}
        </div>
    )
}

export default LabelInput
