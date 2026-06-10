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
var UpFromLine_exports = {};
__export(UpFromLine_exports, {
  default: () => UpFromLine_default
});
module.exports = __toCommonJS(UpFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpFromLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 480H376C380.418 480 384 476.418 384 472S380.418 464 376 464H8C3.582 464 0 467.582 0 472S3.582 480 8 480ZM56 223.818H128V351.908C128 369.596 142.328 383.932 160 383.932H224C241.674 383.932 256 369.596 256 351.908V223.818H328C337.578 223.818 346.25 218.109 350.047 209.307C353.828 200.504 352.031 190.277 345.453 183.305L209.453 39.201C204.922 34.4 198.461 32 192 32S179.078 34.4 174.547 39.201L38.547 183.305C31.969 190.277 30.172 200.504 33.953 209.307C37.75 218.109 46.422 223.818 56 223.818ZM50.184 194.287L186.182 50.184C187.473 48.816 189.648 48 192 48S196.527 48.816 197.816 50.184L333.814 194.285C336.016 196.617 336.615 200.035 335.355 202.971C334.084 205.916 331.197 207.818 328 207.818H240V351.908C240 360.744 232.822 367.932 224 367.932H160C151.178 367.932 144 360.744 144 351.908V207.818H56C52.803 207.818 49.916 205.916 48.654 202.992C47.385 200.035 47.984 196.617 50.184 194.287Z" })
  }
));
UpFromLineThin.displayName = "UpFromLineThin";
var UpFromLine_default = UpFromLineThin;
