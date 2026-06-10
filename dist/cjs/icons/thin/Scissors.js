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
var Scissors_exports = {};
__export(Scissors_exports, {
  default: () => Scissors_default
});
module.exports = __toCommonJS(Scissors_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScissorsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M341.181 291.109C337.868 288.281 332.837 288.641 329.9 292.016C327.025 295.391 327.431 300.438 330.806 303.297L498.803 446.094C500.303 447.375 502.146 448 503.99 448C506.24 448 508.49 447.047 510.084 445.188C512.959 441.812 512.552 436.766 509.177 433.906L341.181 291.109ZM509.177 78.094C512.552 75.234 512.959 70.188 510.084 66.812C507.209 63.422 502.178 63.078 498.803 65.906L287.526 245.496L189.918 162.529C201.303 145.85 207.996 125.719 207.996 104C207.996 46.562 161.434 0 103.998 0S0 46.562 0 104S46.562 208 103.998 208C133.958 208 160.753 195.15 179.731 174.877L275.168 256L179.731 337.123C160.753 316.85 133.958 304 103.998 304C46.562 304 0 350.562 0 408S46.562 512 103.998 512S207.996 465.438 207.996 408C207.996 386.281 201.303 366.15 189.918 349.471L292.713 262.094L509.177 78.094ZM103.998 192C55.475 192 16 152.523 16 104S55.475 16 103.998 16S191.996 55.477 191.996 104S152.52 192 103.998 192ZM191.996 408C191.996 456.523 152.52 496 103.998 496S16 456.523 16 408S55.475 320 103.998 320S191.996 359.477 191.996 408Z" })
  }
));
ScissorsThin.displayName = "ScissorsThin";
var Scissors_default = ScissorsThin;
