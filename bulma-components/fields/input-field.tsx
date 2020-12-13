import * as React from "react";

export interface InputFieldProps {
    type?: string,
    onChange: (e: React.ChangeEvent) => void,
    placeholder?: string,
    help?: string,
    isSuccess?: boolean,
    isDanger?: boolean
}

export class InputField extends React.Component {

    public props: InputFieldProps;

    public render(): JSX.Element {
        return (
            <div className="field">
                <div className="control">
                    <input
                        type={this.props.type || "text"}
                        onChange={this.props.onChange}
                        className={this.inputClass()}
                        placeholder={this.props.placeholder || ""}
                    />
                </div>
                {this.props.help ? this.help() : ""}
            </div>
        );
    }

    private inputClass(): string {
        const parts = ["input"];
        if (this.props.isSuccess) parts.push("is-success");
        if (this.props.isDanger) parts.push("is-danger");
        return parts.join(" ");
    }

    private help(): JSX.Element {
        const parts = ["help"];
        if (this.props.isSuccess) parts.push("is-success");
        if (this.props.isDanger) parts.push("is-danger");
        const className = parts.join(" ");
        return <p className={className}>{this.props.help}</p>
    }


}

export const EmailField = (props: InputFieldProps): JSX.Element => {
    return <InputField
        type="email"
        onChange={props.onChange}
        placeholder="email"
        {...props}
    />
};

export const PasswordField = (props: InputFieldProps): JSX.Element => {
    return <InputField
        type="password"
        onChange={props.onChange}
        placeholder="password"
        {...props}
    />
};
