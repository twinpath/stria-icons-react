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
var UnlockKeyhole_exports = {};
__export(UnlockKeyhole_exports, {
  default: () => UnlockKeyhole_default
});
module.exports = __toCommonJS(UnlockKeyhole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UnlockKeyholeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 304C210.75 304 200 314.75 200 328V376C200 389.25 210.75 400 224 400S248 389.25 248 376V328C248 314.75 237.25 304 224 304ZM384 192H144V128C144 83.891 179.891 48 224 48C258.844 48 289.438 70.25 300.141 103.375C304.234 116 317.672 122.859 330.359 118.844C342.969 114.766 349.891 101.234 345.828 88.625C328.688 35.609 279.734 0 224 0C153.422 0 96 57.422 96 128V192H64C28.654 192 0 220.654 0 256V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V256C448 220.654 419.346 192 384 192ZM400 448C400 456.822 392.822 464 384 464H64C55.178 464 48 456.822 48 448V256C48 247.178 55.178 240 64 240H384C392.822 240 400 247.178 400 256V448Z" })
  }
));
UnlockKeyholeRegular.displayName = "UnlockKeyholeRegular";
var UnlockKeyhole_default = UnlockKeyholeRegular;
