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
var UserRobot_exports = {};
__export(UserRobot_exports, {
  default: () => UserRobot_default
});
module.exports = __toCommonJS(UserRobot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserRobotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 200C297.674 200 312 185.672 312 168C312 150.326 297.674 136 280 136C262.328 136 248 150.326 248 168C248 185.672 262.328 200 280 200ZM128 320H320C355.348 320 384 291.346 384 256V128C384 92.654 355.348 64 320 64H248V24C248 10.75 237.25 0 224 0S200 10.75 200 24V64H128C92.654 64 64 92.654 64 128V256C64 291.346 92.654 320 128 320ZM112 128C112 119.178 119.178 112 128 112H320C328.822 112 336 119.178 336 128V256C336 264.822 328.822 272 320 272H304V240H272V272H240V240H208V272H176V240H144V272H128C119.178 272 112 264.822 112 256V128ZM168 200C185.674 200 200 185.672 200 168C200 150.326 185.674 136 168 136C150.328 136 136 150.326 136 168C136 185.672 150.328 200 168 200ZM416 128V256C433.674 256 448 241.672 448 224V160C448 142.326 433.674 128 416 128ZM32 256V128C14.328 128 0 142.326 0 160V224C0 241.672 14.328 256 32 256ZM352 352H96C42.98 352 0 394.98 0 448V480C0 497.672 14.328 512 32 512H416C433.674 512 448 497.672 448 480V448C448 394.98 405.02 352 352 352ZM400 464H320C320 446.326 305.674 432 288 432H160C142.328 432 128 446.326 128 464H48V448C48 421.533 69.533 400 96 400H352C378.467 400 400 421.533 400 448V464Z" })
  }
));
UserRobotRegular.displayName = "UserRobotRegular";
var UserRobot_default = UserRobotRegular;
