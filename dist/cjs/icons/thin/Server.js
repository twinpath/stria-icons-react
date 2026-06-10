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
var Server_exports = {};
__export(Server_exports, {
  default: () => Server_default
});
module.exports = __toCommonJS(Server_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ServerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 288H48C21.6 288 0 309.6 0 336V432C0 458.4 21.6 480 48 480H464C490.4 480 512 458.4 512 432V336C512 309.6 490.4 288 464 288ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V336C16 318.355 30.355 304 48 304H464C481.645 304 496 318.355 496 336V432ZM464 32H48C21.6 32 0 53.6 0 80V176C0 202.4 21.6 224 48 224H464C490.4 224 512 202.4 512 176V80C512 53.6 490.4 32 464 32ZM496 176C496 193.645 481.645 208 464 208H48C30.355 208 16 193.645 16 176V80C16 62.355 30.355 48 48 48H464C481.645 48 496 62.355 496 80V176ZM352 112C343.168 112 336 119.166 336 128S343.168 144 352 144C360.834 144 368 136.834 368 128S360.834 112 352 112ZM416 112C407.168 112 400 119.166 400 128S407.168 144 416 144C424.834 144 432 136.834 432 128S424.834 112 416 112ZM352 368C343.168 368 336 375.166 336 384C336 392.832 343.168 400 352 400C360.834 400 368 392.832 368 384C368 375.166 360.834 368 352 368ZM416 368C407.168 368 400 375.166 400 384C400 392.832 407.168 400 416 400C424.834 400 432 392.832 432 384C432 375.166 424.834 368 416 368Z" })
  }
));
ServerThin.displayName = "ServerThin";
var Server_default = ServerThin;
