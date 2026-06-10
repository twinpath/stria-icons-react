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
var IdBadge_exports = {};
__export(IdBadge_exports, {
  default: () => IdBadge_default
});
module.exports = __toCommonJS(IdBadge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IdBadgeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 80H248C252.418 80 256 76.418 256 72S252.418 64 248 64H136C131.582 64 128 67.582 128 72S131.582 80 136 80ZM336 0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V48C384 21.492 362.51 0 336 0ZM368 464C368 481.645 353.645 496 336 496H48C30.355 496 16 481.645 16 464V48C16 30.355 30.355 16 48 16H336C353.645 16 368 30.355 368 48V464ZM192 288C227.346 288 256 259.348 256 224S227.346 160 192 160S128 188.652 128 224S156.654 288 192 288ZM192 176C218.467 176 240 197.531 240 224S218.467 272 192 272S144 250.469 144 224S165.533 176 192 176ZM224 320H160C115.891 320 80 355.891 80 400V408C80 412.422 83.578 416 88 416S96 412.422 96 408V400C96 364.703 124.703 336 160 336H224C259.297 336 288 364.703 288 400V408C288 412.422 291.578 416 296 416S304 412.422 304 408V400C304 355.891 268.109 320 224 320Z" })
  }
));
IdBadgeThin.displayName = "IdBadgeThin";
var IdBadge_default = IdBadgeThin;
