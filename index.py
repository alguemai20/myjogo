
import random

def escolher_palavra():
    palavras = ["python", "banana", "computador", "programar", "chocolate"]
    return random.choice(palavras)

def mostrar_palavra(palavra_secreta, letras_adivinhadas):
    return ' '.join([letra if letra in letras_adivinhadas else '_' for letra in palavra_secreta])

def jogar_forca():
    palavra = escolher_palavra()
    letras_adivinhadas = []
    tentativas = 6

    print("🎮 Bem-vindo ao Jogo da Forca!")

    while tentativas > 0:
        print("\nPalavra:", mostrar_palavra(palavra, letras_adivinhadas))
        print(f"Tentativas restantes: {tentativas}")
        chute = input("Digite uma letra: ").lower()

        if chute in letras_adivinhadas:
            print("Você já tentou essa letra.")
            continue

        letras_adivinhadas.append(chute)

        if chute in palavra:
            print("Boa! Letra correta.")
        else:
            print("Letra errada.")
            tentativas -= 1

        if all(letra in letras_adivinhadas for letra in palavra):
            print("\n🎉 Parabéns! Você venceu!")
            print(f"A palavra era: {palavra}")
            break
    else:
        print("\n💀 Fim de jogo! Você perdeu.")
        print(f"A palavra era: {palavra}")

jogar_forca()
