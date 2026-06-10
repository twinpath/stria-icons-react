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
var MugMarshmallows_exports = {};
__export(MugMarshmallows_exports, {
  default: () => MugMarshmallows_default
});
module.exports = __toCommonJS(MugMarshmallows_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugMarshmallowsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 160H24C17.625 160 11.5 162.5 7 167S0 177.625 0 184V384C0 437 43 480 96 480H288C341 480 384 437 384 384V352H416C468.938 352 512 308.938 512 256S468.938 160 416 160ZM368 384C368 428.111 332.111 464 288 464H96C51.889 464 16 428.111 16 384V184C16 178.871 20.172 176 24 176H96V280C96 284.422 99.578 288 104 288S112 284.422 112 280V176H160V248C160 252.422 163.578 256 168 256S176 252.422 176 248V176H368V384ZM416 336H384V176H416C460.109 176 496 211.891 496 256S460.109 336 416 336ZM40 136C44.422 136 48 132.422 48 128V72C48 58.766 58.766 48 72 48H168C174.891 48 181.453 50.969 186 56.125C188.922 59.453 193.969 59.766 197.281 56.844C200.609 53.922 200.922 48.875 198 45.562C190.422 36.938 179.484 32 168 32H72C49.938 32 32 49.938 32 72V128C32 132.422 35.578 136 40 136ZM191.453 130.625C192.922 134.797 197.438 136.953 201.641 135.562C205.812 134.109 208.016 129.547 206.578 125.375C203.531 116.609 205.719 107.094 212.281 100.516L257.531 55.266C266.906 45.859 282.109 45.891 291.484 55.266L336.734 100.516C343.297 107.078 345.484 116.609 342.438 125.375C341 129.547 343.203 134.109 347.375 135.562C348.25 135.859 349.125 136 350 136C353.312 136 356.406 133.922 357.562 130.625C362.547 116.234 358.812 99.969 348.047 89.203L302.797 43.953C287.187 28.328 261.797 28.359 246.219 43.953L200.969 89.203C190.203 99.984 186.469 116.25 191.453 130.625Z" })
  }
));
MugMarshmallowsThin.displayName = "MugMarshmallowsThin";
var MugMarshmallows_default = MugMarshmallowsThin;
