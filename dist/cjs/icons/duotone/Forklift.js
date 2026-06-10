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
var Forklift_exports = {};
__export(Forklift_exports, {
  default: () => Forklift_default
});
module.exports = __toCommonJS(Forklift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkliftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 512C51.817 512 16 476.183 16 432S51.817 352 96 352S176 387.817 176 432S140.183 512 96 512ZM432 432C432 387.817 396.183 352 352 352S272 387.817 272 432S307.817 512 352 512S432 476.183 432 432ZM608 384H544V32C544 14.4 529.6 0 512 0H512C494.4 0 480 14.4 480 32V432C480 440.8 487.2 448 496 448H608C625.6 448 640 433.6 640 416V416C640 398.4 625.6 384 608 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 320C152.281 320 198.535 361.859 206.383 416H241.617C249.465 361.859 295.719 320 352 320C375.82 320 397.828 327.602 416 340.328V237.125C416 228.375 414.25 219.875 410.75 211.875L332.5 29.125C324.875 11.375 307.625 0 288.25 0H144C117.5 0 96 21.5 96 48V160H48C21.5 160 0 181.5 0 208V375.227C19.531 342.328 55.047 320 96 320ZM160 64H277.75L352 237.125V256H256L160 160V64Z" })
    ]
  }
));
ForkliftDuotone.displayName = "ForkliftDuotone";
var Forklift_default = ForkliftDuotone;
