import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  Attested,
  NonceIncreased,
  Revoked,
  RevokedOffchain,
  Timestamped
} from "../generated/EAS/EAS"

export function createAttestedEvent(
  recipient: Address,
  attester: Address,
  uid: Bytes,
  schemaUID: Bytes
): Attested {
  let attestedEvent = changetype<Attested>(newMockEvent())

  attestedEvent.parameters = new Array()

  attestedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  attestedEvent.parameters.push(
    new ethereum.EventParam("attester", ethereum.Value.fromAddress(attester))
  )
  attestedEvent.parameters.push(
    new ethereum.EventParam("uid", ethereum.Value.fromFixedBytes(uid))
  )
  attestedEvent.parameters.push(
    new ethereum.EventParam(
      "schemaUID",
      ethereum.Value.fromFixedBytes(schemaUID)
    )
  )

  return attestedEvent
}

export function createNonceIncreasedEvent(
  oldNonce: BigInt,
  newNonce: BigInt
): NonceIncreased {
  let nonceIncreasedEvent = changetype<NonceIncreased>(newMockEvent())

  nonceIncreasedEvent.parameters = new Array()

  nonceIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "oldNonce",
      ethereum.Value.fromUnsignedBigInt(oldNonce)
    )
  )
  nonceIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "newNonce",
      ethereum.Value.fromUnsignedBigInt(newNonce)
    )
  )

  return nonceIncreasedEvent
}

export function createRevokedEvent(
  recipient: Address,
  attester: Address,
  uid: Bytes,
  schemaUID: Bytes
): Revoked {
  let revokedEvent = changetype<Revoked>(newMockEvent())

  revokedEvent.parameters = new Array()

  revokedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  revokedEvent.parameters.push(
    new ethereum.EventParam("attester", ethereum.Value.fromAddress(attester))
  )
  revokedEvent.parameters.push(
    new ethereum.EventParam("uid", ethereum.Value.fromFixedBytes(uid))
  )
  revokedEvent.parameters.push(
    new ethereum.EventParam(
      "schemaUID",
      ethereum.Value.fromFixedBytes(schemaUID)
    )
  )

  return revokedEvent
}

export function createRevokedOffchainEvent(
  revoker: Address,
  data: Bytes,
  timestamp: BigInt
): RevokedOffchain {
  let revokedOffchainEvent = changetype<RevokedOffchain>(newMockEvent())

  revokedOffchainEvent.parameters = new Array()

  revokedOffchainEvent.parameters.push(
    new ethereum.EventParam("revoker", ethereum.Value.fromAddress(revoker))
  )
  revokedOffchainEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromFixedBytes(data))
  )
  revokedOffchainEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return revokedOffchainEvent
}

export function createTimestampedEvent(
  data: Bytes,
  timestamp: BigInt
): Timestamped {
  let timestampedEvent = changetype<Timestamped>(newMockEvent())

  timestampedEvent.parameters = new Array()

  timestampedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromFixedBytes(data))
  )
  timestampedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return timestampedEvent
}
