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
var Shelves_exports = {};
__export(Shelves_exports, {
  default: () => Shelves_default
});
module.exports = __toCommonJS(Shelves_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShelvesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 0C602.75 0 592 10.75 592 24V144H509.736C511.068 138.857 512 133.559 512 128V64C512 28.652 483.346 0 448 0H384C348.654 0 320 28.652 320 64V128C320 133.559 320.932 138.857 322.264 144H48V24C48 10.75 37.25 0 24 0S0 10.75 0 24V488C0 501.25 10.75 512 24 512S48 501.25 48 488V448H592V488C592 501.25 602.75 512 616 512S640 501.25 640 488V24C640 10.75 629.25 0 616 0ZM368 128V64C368 55.178 375.178 48 384 48H448C456.822 48 464 55.178 464 64V128C464 136.822 456.822 144 448 144H384C375.178 144 368 136.822 368 128ZM160 400C151.178 400 144 392.822 144 384V320C144 311.178 151.178 304 160 304H224C232.822 304 240 311.178 240 320V384C240 392.822 232.822 400 224 400H160ZM304 400C295.178 400 288 392.822 288 384V320C288 311.178 295.178 304 304 304H368C376.822 304 384 311.178 384 320V384C384 392.822 376.822 400 368 400H304ZM429.736 400C431.068 394.857 432 389.559 432 384V320C432 284.652 403.346 256 368 256H304C288.777 256 274.984 261.535 264 270.408C253.016 261.535 239.223 256 224 256H160C124.654 256 96 284.652 96 320V384C96 389.559 96.932 394.857 98.264 400H48V192H592V400H429.736Z" })
  }
));
ShelvesRegular.displayName = "ShelvesRegular";
var Shelves_default = ShelvesRegular;
