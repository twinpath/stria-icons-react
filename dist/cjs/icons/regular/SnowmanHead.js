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
var SnowmanHead_exports = {};
__export(SnowmanHead_exports, {
  default: () => SnowmanHead_default
});
module.exports = __toCommonJS(SnowmanHead_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SnowmanHeadRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152.023 288C138.789 288 127.953 298.695 127.953 311.93C127.953 325.16 138.648 336 152.023 336C165.117 336 175.953 325.16 175.953 311.93C175.953 298.836 165.258 288 152.023 288ZM295.93 288C282.836 288 272 298.695 272 311.93C272 325.16 282.695 336 295.93 336C309.301 336 320.141 325.16 320 311.93C320 298.836 309.301 288 295.93 288ZM224 352C206.25 352 192 366.25 192 384S224 448 224 448S256 401.75 256 384S241.75 352 224 352ZM448 208C448 199.164 440.836 192 432 192H368V48C368 21.6 346.4 0 320 0H128C101.6 0 80 21.6 80 48V192H16C7.164 192 0 199.164 0 208C0 234.508 21.492 256 48 256H58.383C41.867 284.266 32 316.883 32 352C32 409.277 57.109 460.656 96.895 495.82C108.703 506.262 123.992 512 139.758 512H308.281C323.82 512 338.957 506.492 350.633 496.238C400.352 452.578 427.348 383.688 411.437 309.508C407.336 290.375 399.777 272.531 390.066 256H400C426.508 256 448 234.508 448 208ZM128 144H320V192H128V144ZM318.959 460.172C316.189 462.605 312.297 464 308.281 464H139.758C135.639 464 131.709 462.529 128.684 459.855C97.744 432.51 80 393.199 80 352C80 326.883 86.672 302.732 99.826 280.215L113.975 256H334.398L348.68 280.312C356.42 293.49 361.746 306.699 364.506 319.574C375.875 372.584 358.85 425.145 318.959 460.172Z" })
  }
));
SnowmanHeadRegular.displayName = "SnowmanHeadRegular";
var SnowmanHead_default = SnowmanHeadRegular;
