import { Component, ElementRef, ViewChild } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent {
  @ViewChild('input1') input1!: ElementRef<HTMLInputElement>
  @ViewChild('input2') input2!: ElementRef<HTMLInputElement>
  @ViewChild('input3') input3!: ElementRef<HTMLInputElement>
  @ViewChild('input4') input4!: ElementRef<HTMLInputElement>
  @ViewChild('input5') input5!: ElementRef<HTMLInputElement>
  @ViewChild('input6') input6!: ElementRef<HTMLInputElement>

  email: string = '';

  /** Variável temporária para navegar pelo recover-password */
  public show = 0

  /** Condição para ver ou não a senha */
  public passwordModeNew = true
  public passwordModeRepeat = true

  constructor(public bsModalRef: BsModalRef) {}

  /**
   * Método temporário para navegar pelo recover-password
   *
   * @author Nathan da Silva Lira
   */
  public alternateShow(number: number): void {
    this.show = number
  }

  /**
   * Ir para o próximo input quando o usuário digitar um caractere
   *
   * @param currentInput Input atual
   * @param nextInput Próximo input
   *
   * @author Nathan da Silva Lira
   */
  onInput(currentInput: HTMLInputElement, nextInput?: HTMLInputElement): void {
    const value = currentInput.value
    const nextElement = nextInput || null

    if (value && nextElement) {
      nextElement.focus()
    }
  }

  /**
   * Ir ao input anterior quando o usuário apagar um caractere
   *
   * @param event Evento do input
   * @param currentInput Input atual
   * @param prevInput Input anterior
   *
   * @author Nathan da Silva Lira
   */
  onKeyDown(
    event: KeyboardEvent,
    currentInput: HTMLInputElement,
    prevInput: HTMLInputElement,
  ): void {
    if (event.key === 'Backspace') {
      if (currentInput.value === '' && prevInput) {
        prevInput.focus()
      }
    }
  }
}
