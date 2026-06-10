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
var PhonePlus_exports = {};
__export(PhonePlus_exports, {
  default: () => PhonePlus_default
});
module.exports = __toCommonJS(PhonePlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhonePlusThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.094 351.248L384.609 304.748C380.643 303.031 376.461 302.205 372.318 302.205C363.117 302.205 354.117 306.281 348.125 313.717L304.078 367.529C234.828 333.529 178.531 277.248 144.547 208.027L198.375 163.934C209.125 155.152 212.797 140.277 207.359 127.494L160.828 18.932C155.709 7.25 144.248 0 132.006 0C129.676 0 127.318 0.262 124.969 0.807L24.219 24.057C9.969 27.307 0 39.838 0 54.494C0 306.779 205.234 512 457.484 512C472.156 512 484.688 502.031 487.953 487.781L511.203 387C514.578 372.404 507 357.248 493.094 351.248ZM495.613 383.402L472.357 484.207C470.768 491.15 464.65 496 457.484 496C214.049 496 16 297.941 16 54.494C16 47.34 20.844 41.238 27.816 39.646C140.291 13.691 130.365 16 132.006 16C138.123 16 143.684 19.672 146.123 25.234L192.637 133.756C195.277 139.963 193.475 147.277 188.236 151.557L124.594 203.689C191.221 339.387 289.258 378.074 308.42 387.486L360.584 323.756C362.596 321.26 369.48 315.633 378.307 319.453L486.756 365.939C493.551 368.871 497.275 376.211 495.613 383.402ZM328 104H408V184C408 188.422 411.578 192 416 192S424 188.422 424 184V104H504C508.422 104 512 100.422 512 96S508.422 88 504 88H424V8C424 3.578 420.422 0 416 0S408 3.578 408 8V88H328C323.578 88 320 91.578 320 96S323.578 104 328 104Z" })
  }
));
PhonePlusThin.displayName = "PhonePlusThin";
var PhonePlus_default = PhonePlusThin;
