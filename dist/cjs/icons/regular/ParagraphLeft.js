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
var ParagraphLeft_exports = {};
__export(ParagraphLeft_exports, {
  default: () => ParagraphLeft_default
});
module.exports = __toCommonJS(ParagraphLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ParagraphLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M143.977 224H175.969L176 296C176 309.254 186.746 320 200 320S224 309.254 224 296V48H256V296C256 309.254 266.746 320 280 320S304 309.254 304 296V48H328C341.254 48 352 37.254 352 24C352 10.744 341.254 0 328 0H143.977C79.99 0 32 48 32 112S79.99 224 143.977 224ZM143.977 48H175.969V176H143.977C106.359 176 79.99 149.625 79.99 112S106.359 48 143.977 48ZM360 392H86.547L120.062 361.844C129.906 352.969 130.719 337.812 121.844 327.938C112.938 318.094 97.781 317.281 87.938 326.156L7.938 398.156C2.875 402.719 0 409.188 0 416S2.875 429.281 7.938 433.844L87.938 505.844C92.531 509.969 98.281 512 104 512C110.562 512 117.094 509.312 121.844 504.062C130.719 494.187 129.906 479.031 120.062 470.156L86.547 440H360C373.25 440 384 429.25 384 416S373.25 392 360 392Z" })
  }
));
ParagraphLeftRegular.displayName = "ParagraphLeftRegular";
var ParagraphLeft_default = ParagraphLeftRegular;
