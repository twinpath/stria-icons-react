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
const BarcodeScanDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 232H24C10.745 232 0 242.745 0 256V256C0 269.255 10.745 280 24 280H616C629.255 280 640 269.255 640 256V256C640 242.745 629.255 232 616 232Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 32H248C234.801 32 224 42.799 224 56V192H288V56C288 42.799 277.199 32 264 32ZM176 32C167.199 32 160 39.199 160 48V192H192V48C192 39.199 184.801 32 176 32ZM224 456C224 469.199 234.801 480 248 480H264C277.199 480 288 469.199 288 456V320H224V456ZM160 464C160 472.799 167.199 480 176 480S192 472.799 192 464V320H160V464ZM104 32H88C74.801 32 64 42.799 64 56V192H128V56C128 42.799 117.199 32 104 32ZM64 456C64 469.199 74.801 480 88 480H104C117.199 480 128 469.199 128 456V320H64V456ZM464 32C455.199 32 448 39.199 448 48V192H480V48C480 39.199 472.801 32 464 32ZM512 456C512 469.199 522.801 480 536 480H552C565.199 480 576 469.199 576 456V320H512V456ZM552 32H536C522.801 32 512 42.799 512 56V192H576V56C576 42.799 565.199 32 552 32ZM360 32H344C330.801 32 320 42.799 320 56V192H384V56C384 42.799 373.199 32 360 32ZM320 456C320 469.199 330.801 480 344 480H360C373.199 480 384 469.199 384 456V320H320V456ZM448 464C448 472.799 455.199 480 464 480S480 472.799 480 464V320H448V464Z" })
    ]
  }
));
BarcodeScanDuotone.displayName = "BarcodeScanDuotone";
var BarcodeScan_default = BarcodeScanDuotone;
