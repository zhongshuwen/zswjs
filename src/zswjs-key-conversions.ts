import {ec as EC, curves} from 'elliptic';
import * as hash from 'hash.js';
import {KeyType} from './zswjs-numeric';
import { PublicKey } from './PublicKey';
import { PrivateKey } from './PrivateKey';

export { PrivateKey } from './PrivateKey';
export { PublicKey } from './PublicKey';
export { Signature } from './Signature';

interface Options {
    type: string;
    prime: string | null;
    p: string;
    a: string;
    b: string;
    n: string;
    hash: any;
    gRed: boolean;
    g: any; // ?
    beta?: string | undefined;
    lambda?: string | undefined;
    basis?: any; // ?
}
const SM2_PARAMS : curves.PresetCurve.Options= {

    type: 'short',
    prime: null,
    p: 'FFFFFFFE FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF 00000000 FFFFFFFF FFFFFFFF',
    a: 'FFFFFFFE FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF 00000000 FFFFFFFF FFFFFFFC',
    b: '28E9FA9E 9D9F5E34 4D5A9E4B CF6509A7 F39789F5 15AB8F92 DDBCBD41 4D940E93',
    n: 'FFFFFFFE FFFFFFFF FFFFFFFF FFFFFFFF 7203DF6B 21C6052B 53BBF409 39D54123',
    hash: hash.sha256,
    gRed: false,
    g: [
      '32C4AE2C 1F198119 5F990446 6A39C994 8FE30BBF F2660BE1 715A4589 334C74C7',
      'BC3736A2 F4F6779C 59BDCEE3 6B692153 D0A9877C C62A4740 02DF32E5 2139F0A0'
    ]
  
  }

/** Construct the elliptic curve object based on key type */
export const constructElliptic = (type: KeyType): EC => {
    

    if (type === KeyType.k1) {
        return new EC('secp256k1');
    }else if(type === KeyType.gm){
        return new EC(new curves.PresetCurve(SM2_PARAMS));
    }
    return new EC('p256');
};

export const generateKeyPair = (
    type: KeyType, options: { secureEnv?: boolean, ecOptions?: EC.GenKeyPairOptions } = {}
): { publicKey: PublicKey, privateKey: PrivateKey } => {
    if (!options.secureEnv) {
        throw new Error('Key generation is completely INSECURE in production environments in the browser. ' +
            'If you are absolutely certain this does NOT describe your environment, set `secureEnv` in your ' +
            'options to `true`.  If this does describe your environment and you set `secureEnv` to `true`, ' +
            'YOU DO SO AT YOUR OWN RISK AND THE RISK OF YOUR USERS.');
    }
    let ec = constructElliptic(type);
    const ellipticKeyPair = ec.genKeyPair(options.ecOptions);
    const publicKey = PublicKey.fromElliptic(ellipticKeyPair, type, ec);
    const privateKey = PrivateKey.fromElliptic(ellipticKeyPair, type, ec);
    return {publicKey, privateKey};
};

export const sha256 = (data: string|Buffer): number[]|string => {
    return hash.sha256().update(data).digest();
};
