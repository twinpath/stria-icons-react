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
var UserNinja_exports = {};
__export(UserNinja_exports, {
  default: () => UserNinja_default
});
module.exports = __toCommonJS(UserNinja_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserNinjaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 192C59.25 192 83.75 180.5 101.25 162.25C116.25 216.25 165.25 256 224 256C294.75 256 352 198.75 352 128S294.75 0 224 0C173.625 0 130.375 29.375 109.5 71.75C92.125 47.75 64 32 32 32C32 65.375 49.125 94.75 75.125 112C49.125 129.25 32 158.625 32 192ZM176 96H272C289.75 96 304 110.25 304 128H144C144 110.25 158.25 96 176 96ZM447.684 464C450.426 376.445 388.402 303.002 305.795 288L224 397.059L142.205 288C59.604 303.002 -2.428 376.445 0.314 464H0C0 490.51 21.49 512 48 512H400C426.51 512 448 490.51 448 464H447.684ZM48.338 464L48.291 462.496C46.635 409.588 77.17 363.16 123.701 343.326L185.6 425.859L214.207 464H48.338ZM399.67 464H233.793L262.4 425.859L324.301 343.326C370.828 363.16 401.363 409.586 399.707 462.496L399.67 464Z" })
  }
));
UserNinjaRegular.displayName = "UserNinjaRegular";
var UserNinja_default = UserNinjaRegular;
