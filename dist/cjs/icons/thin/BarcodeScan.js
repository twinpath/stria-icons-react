var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BarcodeScan_exports = {};
__export(BarcodeScan_exports, {
  default: () => BarcodeScan_default
});
module.exports = __toCommonJS(BarcodeScan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarcodeScanThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 248H8C3.578 248 0 251.578 0 256S3.578 264 8 264H632C636.422 264 640 260.422 640 256S636.422 248 632 248ZM264 40C264 35.578 260.422 32 256 32S248 35.578 248 40V192H264V40ZM80 40C80 35.578 76.422 32 72 32S64 35.578 64 40V192H80V40ZM128 40C128 35.578 124.422 32 120 32S112 35.578 112 40V192H128V40ZM192 40C192 35.578 188.422 32 184 32S176 35.578 176 40V192H192V40ZM336 40C336 35.578 332.422 32 328 32S320 35.578 320 40V192H336V40ZM384 40C384 35.578 380.422 32 376 32S368 35.578 368 40V192H384V40ZM528 40C528 35.578 524.422 32 520 32S512 35.578 512 40V192H528V40ZM576 40C576 35.578 572.422 32 568 32S560 35.578 560 40V192H576V40ZM464 40C464 35.578 460.422 32 456 32S448 35.578 448 40V192H464V40ZM320 472C320 476.422 323.578 480 328 480S336 476.422 336 472V320H320V472ZM512 472C512 476.422 515.578 480 520 480S528 476.422 528 472V320H512V472ZM64 472C64 476.422 67.578 480 72 480S80 476.422 80 472V320H64V472ZM560 472C560 476.422 563.578 480 568 480S576 476.422 576 472V320H560V472ZM368 472C368 476.422 371.578 480 376 480S384 476.422 384 472V320H368V472ZM448 472C448 476.422 451.578 480 456 480S464 476.422 464 472V320H448V472ZM112 472C112 476.422 115.578 480 120 480S128 476.422 128 472V320H112V472ZM248 472C248 476.422 251.578 480 256 480S264 476.422 264 472V320H248V472ZM176 472C176 476.422 179.578 480 184 480S192 476.422 192 472V320H176V472Z" })
  }
));
BarcodeScanThin.displayName = "BarcodeScanThin";
var BarcodeScan_default = BarcodeScanThin;
