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
var Passport_exports = {};
__export(Passport_exports, {
  default: () => Passport_default
});
module.exports = __toCommonJS(Passport_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PassportRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.654 0 0 28.652 0 64V448C0 483.344 28.654 512 64 512H384C419.199 512 448 483.199 448 448V64C448 28.797 419.199 0 384 0ZM400 448C400 456.836 392.836 464 384 464H64C55.164 464 48 456.836 48 448V64C48 55.164 55.164 48 64 48H384C392.836 48 400 55.164 400 64V448ZM336 384H112C103.25 384 96 391.25 96 400S103.25 416 112 416H336C344.75 416 352 408.75 352 400S344.75 384 336 384ZM224 328C290.25 328 344 274.25 344 208S290.25 88 224 88S104 141.75 104 208S157.75 328 224 328ZM310.375 192H275.75C274.375 168.375 269.999 147 263.5 129.75C287.625 142 305.375 164.625 310.375 192ZM275.75 224H310.375C305.375 251.375 287.5 274 263.5 286.25C269.999 269 274.375 247.625 275.75 224ZM224 122.25C230.875 130.625 241.5 154.625 244 192H204C206.5 154.625 217.125 130.625 224 122.25ZM244 224C241.5 261.375 230.875 285.375 224 293.75C217.125 285.375 206.5 261.375 204 224H244ZM184.5 129.75C177.999 147 173.625 168.375 172.25 192H137.625C142.625 164.625 160.375 142 184.5 129.75ZM172.25 224C173.625 247.625 177.999 269 184.5 286.25C160.5 274 142.625 251.375 137.625 224H172.25Z" })
  }
));
PassportRegular.displayName = "PassportRegular";
var Passport_default = PassportRegular;
