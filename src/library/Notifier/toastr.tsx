import { Notification, toaster } from "rsuite";

type NotificationType = 'info' | 'success' | 'warning' | 'error'

export class Toastr {

    private message: string

    constructor(message: string) {
        this.message = message
    }

    private createMessage = (type: NotificationType) =>
    (<Notification type={type} header={type} closable>
        {this.message}
    </Notification>);


    static fire(message: string) {
        return new Toastr(message)
    }

    private exec(type: NotificationType) {
        toaster.push(this.createMessage(type), { placement: 'topEnd' })
    }


    public success() {
        this.exec('success')
    }

    public error() {
        this.exec('error')
    }

    public warning() {
        this.exec('warning')
    }

    public info() {
        this.exec('info')
    }
}