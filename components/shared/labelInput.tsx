import React, { useState } from 'react'
import ArrowDown from './icons/arrowDown'
import { ToDoColumn } from './types'

export type SelectOption = {
    title: string
    value: ToDoColumn
}

type Props = {
    inputRef?: React.LegacyRef<HTMLInputElement>
    textAreaRef?: React.LegacyRef<HTMLTextAreaElement>
    placeholder?: string
    label?: string
    parentClassName?: string
    labelClassName?: string
    inputClassName?: string
    numRows?: number
    type: 'input' | 'textarea' | 'select'
    selectedValue?: SelectOption
    selectClassName?: string
    options?: SelectOption[]
    onSelect?: (option: SelectOption) => void
    optionClassName?: string
    optionsClassName?: string
    maxSelectHeight?: string
    tagName?: string
    defaultInput?: string
    defaultTextArea?: string
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
    type,
    selectedValue,
    selectClassName,
    options,
    onSelect,
    optionClassName,
    optionsClassName,
    tagName,
    defaultInput,
    defaultTextArea,
}: Props) => {
    const [selectOpen, setSelectOpen] = useState(false)
    return (
        <div
            className={`flex flex-col gap-[8px] w-full items-start ${parentClassName}`}
        >
            {label && (
                <span className={`text-[12px] font-bold ${labelClassName}`}>
                    {label}
                </span>
            )}
            {type === 'textarea' && (
                <textarea
                    placeholder={placeholder}
                    ref={textAreaRef}
                    className={`w-full py-[8px] px-[16px] text-[13px] rounded-[4px] border border-[#828fa340] bg-transparent resize-none ${inputClassName}`}
                    rows={numRows ?? 2}
                    defaultValue={defaultTextArea}
                />
            )}{' '}
            {type === 'input' && (
                <input
                    placeholder={placeholder}
                    ref={inputRef}
                    className={`w-full py-[8px] px-[16px] text-[13px] rounded-[4px] border border-[#828fa340] bg-transparent ${inputClassName}`}
                    name={tagName}
                    defaultValue={defaultInput}
                />
            )}
            {type === 'select' && (
                <div className="w-full relative">
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setSelectOpen((prev: boolean) => !prev)
                        }}
                        className={`w-full items-center flex justify-between py-[8px] px-[16px] text-[13px] rounded-[4px] border border-[#828fa340] bg-transparent ${selectClassName}`}
                    >
                        <span className="">
                            {selectedValue
                                ? selectedValue?.title
                                : options?.[0]?.title}
                        </span>
                        <div
                            className={`transition-transform duration-500 ${
                                selectOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                        >
                            <ArrowDown />
                        </div>
                    </button>
                    <div
                        className={`w-full flex flex-col items-start overflow-hidden transition-all duration-300   ${
                            selectOpen
                                ? `max-h-[900px] h-auto opacity-100`
                                : 'max-h-0 opacity-0'
                        } ${optionsClassName}`}
                    >
                        {options?.map((option: SelectOption) => {
                            return (
                                <button
                                    key={option?.value}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (onSelect) {
                                            onSelect(option)
                                            setSelectOpen(false)
                                        }
                                    }}
                                    className={`${optionClassName}`}
                                >
                                    {option?.title}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default LabelInput
