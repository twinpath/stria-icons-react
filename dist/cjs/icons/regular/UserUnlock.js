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
var UserUnlock_exports = {};
__export(UserUnlock_exports, {
  default: () => UserUnlock_default
});
module.exports = __toCommonJS(UserUnlock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserUnlockRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C294.693 256 352 198.691 352 128C352 57.307 294.693 0 224 0S96 57.307 96 128C96 198.691 153.307 256 224 256ZM224 48C268.111 48 304 83.887 304 128C304 172.111 268.111 208 224 208S144 172.111 144 128C144 83.887 179.889 48 224 48ZM592 288H464V208C464 190.375 478.375 176 496 176S528 190.375 528 208V224H576V212.695C576 170.852 545.967 132.656 504.34 128.422C501.535 128.137 498.754 127.998 496.008 127.998C451.877 127.996 416 163.871 416 208V288H400C373.6 288 352 309.602 352 336V464C352 490.398 373.6 512 400 512H592C618.4 512 640 490.398 640 464V336C640 309.602 618.4 288 592 288ZM496 432C478.375 432 464 417.625 464 400S478.375 368 496 368S528 382.375 528 400S513.625 432 496 432ZM320 464C320 482.078 326.254 498.588 336.404 512H32C14.326 512 0 497.672 0 480C0 382.797 78.797 304 176 304H272C290.094 304 307.543 306.748 323.971 311.818C321.527 319.477 320 327.543 320 336V361.516C305.148 355.475 288.996 352 272 352H176C110.84 352 56.895 400.945 48.994 464H320Z" })
  }
));
UserUnlockRegular.displayName = "UserUnlockRegular";
var UserUnlock_default = UserUnlockRegular;
