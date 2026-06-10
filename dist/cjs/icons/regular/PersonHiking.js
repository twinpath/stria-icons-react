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
var PersonHiking_exports = {};
__export(PersonHiking_exports, {
  default: () => PersonHiking_default
});
module.exports = __toCommonJS(PersonHiking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonHikingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240.001 96C266.501 96 288.001 74.5 288.001 48S266.501 0 240.001 0S192.001 21.5 192.001 48S213.501 96 240.001 96ZM121.878 317.625L80.753 482.125C77.501 495 85.378 508 98.251 511.25C100.126 511.75 102.126 512 104.001 512C114.753 512 124.626 504.75 127.251 493.875L160.753 360L133.251 332.375C128.753 328 125.251 322.75 121.878 317.625ZM360.001 160H360.001C346.746 160 336.001 170.745 336.001 184V200H298.876L248.753 142.875C239.251 133.25 226.501 128 212.878 128C189.501 128 169.251 143.875 163.626 166.5L141.126 256.5C136.353 275.591 141.938 295.786 155.84 309.712L229.708 383.707C231.176 385.178 232.001 387.171 232.001 389.25V488C232.001 501.25 242.753 512 256.001 512C269.251 512 280.001 501.25 280.001 488V389.158C280.001 374.33 274.111 360.11 263.626 349.625L213.251 299.25L237.753 203.125L270 239.875C274.532 245.039 281.07 248 287.94 248H336.001V488C336.001 501.255 346.746 512 360.001 512H360.001C373.256 512 384.001 501.255 384.001 488V184C384.001 170.745 373.256 160 360.001 160ZM95.886 276.125L137.009 117C139.259 108.625 133.884 100 125.134 98C81.261 87.375 36.763 113 25.763 155.125L0.513 253.25C-1.737 261.625 3.638 270.25 12.388 272.25L76.011 287.5C84.761 289.625 93.636 284.5 95.886 276.125Z" })
  }
));
PersonHikingRegular.displayName = "PersonHikingRegular";
var PersonHiking_default = PersonHikingRegular;
