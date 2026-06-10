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
var JetFighter_exports = {};
__export(JetFighter_exports, {
  default: () => JetFighter_default
});
module.exports = __toCommonJS(JetFighter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JetFighterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 32H282.664C291.503 32 298.664 24.836 298.664 16C298.664 7.162 291.503 0 282.664 0H208C199.164 0 192 7.162 192 16V192H383.999L264 32ZM192 320V496C192 504.836 199.164 512 208 512H282.664C291.503 512 298.664 504.836 298.664 496C298.664 487.162 291.503 480 282.664 480H264L383.999 320H192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M628.513 240.648L476.303 195.898C467.51 193.312 457.162 192 447.998 192H143.999L100.8 134.4C97.781 130.371 93.039 128 88 128H48C39.164 128 32 135.162 32 144V224H16C7.164 224 0 231.162 0 240V272C0 280.836 7.164 288 16 288H32V368C32 376.836 39.164 384 48 384H88C93.039 384 97.781 381.629 100.8 377.6L143.999 320H447.998C457.162 320 467.498 318.688 476.287 316.102L628.513 271.35C643.829 266.846 643.829 245.15 628.513 240.648ZM151.999 264H72C67.593 264 64 260.406 64 256S67.593 248 72 248H151.999C156.406 248 159.999 251.594 159.999 256S156.406 264 151.999 264Z" })
    ]
  }
));
JetFighterDuotone.displayName = "JetFighterDuotone";
var JetFighter_default = JetFighterDuotone;
