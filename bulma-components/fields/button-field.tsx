import * as React from "react";

export class ButtonField extends React.Component {

    public props: any = {};

    public render() {
        return (
            <div className="field">
                <div className="control">
                    <button {...this.disabled()} className={this.buttonClass()} onClick={this.onClick()}>
                        {this.props.children}
                    </button>
                </div>
            </div>
        );
    }

    private disabled() {
        return this.props.isDisabled ? {disabled: true} : {};
    }

    private buttonClass() {
        return `button ${this.props.className || ""}`;
    }

    private onClick() {
        return this.props.isDisabled ? () => {} : this.props.onClick;
    }

}

export const SubmitButtonField = (props): JSX.Element => {
    return <ButtonField className="is-fullwidth is-success" {...props}>
        Submit
    </ButtonField>
};
