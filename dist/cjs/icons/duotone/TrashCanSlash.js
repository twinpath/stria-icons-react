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
var TrashCanSlash_exports = {};
__export(TrashCanSlash_exports, {
  default: () => TrashCanSlash_default
});
module.exports = __toCommonJS(TrashCanSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 448C407.125 448 400 440.875 400 432V410.195L336 360.033V432C336 440.875 328.875 448 320 448S304 440.875 304 432V334.953L240 284.791V432C240 440.875 232.875 448 224 448S208 440.875 208 432V259.711L128 197.008V464C128 490.5 149.5 512 176 512H464C480.359 512 494.773 503.773 503.439 491.27L431.432 434.83C430.062 442.287 423.869 448 416 448ZM304 212.955V208C304 199.125 311.125 192 320 192S336 199.125 336 208V238.037L400 288.197V208C400 199.125 407.125 192 416 192S432 199.125 432 208V313.279L512 375.98V128H195.607L304 212.955ZM528 32H416L404.422 8.844C401.713 3.424 396.172 0 390.111 0H249.889C243.828 0 238.289 3.424 235.578 8.844L224 32H112C103.164 32 96 39.162 96 48V49.93L154.779 96H528C536.838 96 544 88.836 544 80V48C544 39.162 536.838 32 528 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0Z" })
    ]
  }
));
TrashCanSlashDuotone.displayName = "TrashCanSlashDuotone";
var TrashCanSlash_default = TrashCanSlashDuotone;
