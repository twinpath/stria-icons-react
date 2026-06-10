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
var FileHeart_exports = {};
__export(FileHeart_exports, {
  default: () => FileHeart_default
});
module.exports = __toCommonJS(FileHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileHeartDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM284.668 342.314L201.676 427.873C196.289 433.377 187.723 433.377 182.336 427.873L99.344 342.314C75.234 317.299 76.703 276.143 103.629 253.127C127.133 233.111 162.016 236.74 183.437 258.881L191.883 267.635L200.328 258.881C221.875 236.74 256.883 233.111 280.258 253.127C307.312 276.143 308.781 317.299 284.668 342.314Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.713 0V128H383.713L255.713 0ZM200.041 258.881L191.595 267.635L183.15 258.881C161.728 236.74 126.845 233.111 103.342 253.127C76.416 276.143 74.947 317.299 99.056 342.314L182.049 427.873C187.435 433.377 196.002 433.377 201.388 427.873L284.381 342.314C308.494 317.299 307.025 276.143 279.97 253.127C256.595 233.111 221.588 236.74 200.041 258.881Z" })
    ]
  }
));
FileHeartDuotone.displayName = "FileHeartDuotone";
var FileHeart_default = FileHeartDuotone;
