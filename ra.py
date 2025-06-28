import base64
from Crypto.Cipher import AES
from Crypto.Hash import SHA256
from Crypto import Random

# Try with this key (try replacing 'Summerween' with other guesses)
password = 'Summerween'

# Convert password to 32-byte key using SHA-256
def get_key(password):
    hasher = SHA256.new(password.encode('utf-8'))
    return hasher.digest()

encrypted = base64.b64decode("cXjEFEdFL+YgVvGI4UINvsItKJtlKHZtX8XceKhdsXk=")
key = get_key(password)

# If you know how it was padded/IV used, decrypt accordingly.
# This assumes AES-CBC with a 16-byte IV prepended to ciphertext:
iv = encrypted[:16]
cipher = AES.new(key, AES.MODE_CBC, iv)
decrypted = cipher.decrypt(encrypted[16:])

# Remove padding (PKCS7)
pad_len = decrypted[-1]
plaintext = decrypted[:-pad_len]

print("Decrypted message:", plaintext.decode())
#absabfkal