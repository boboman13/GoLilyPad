package packet

import (
	"io"
)

type PacketCodec interface {
	Decode(reader io.Reader, util []byte) (packet Packet, err error)
	Encode(writer io.Writer, util []byte, packet Packet) (err error)
}
