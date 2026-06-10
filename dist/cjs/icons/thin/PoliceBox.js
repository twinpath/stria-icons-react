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
var PoliceBox_exports = {};
__export(PoliceBox_exports, {
  default: () => PoliceBox_default
});
module.exports = __toCommonJS(PoliceBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PoliceBoxThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 496H32C27.594 496 24 499.578 24 504S27.594 512 32 512H416C420.406 512 424 508.422 424 504S420.406 496 416 496ZM72 472C76.406 472 80 468.422 80 464V104C80 90.766 90.781 80 104 80H344C357.219 80 368 90.766 368 104V464C368 468.422 371.594 472 376 472S384 468.422 384 464V104C384 84.773 370.105 69.438 352 65.617V56C352 42.766 341.219 32 328 32H232V8C232 3.578 228.406 0 224 0S216 3.578 216 8V32H120C106.781 32 96 42.766 96 56V65.617C77.896 69.438 64 84.773 64 104V464C64 468.422 67.594 472 72 472ZM112 56C112 51.594 115.594 48 120 48H328C332.406 48 336 51.594 336 56V64H112V56ZM208 144C208 135.164 200.836 128 192 128H128C119.164 128 112 135.164 112 144V208C112 216.836 119.164 224 128 224H192C200.836 224 208 216.836 208 208V144ZM152 208H128V184H152V208ZM152 168H128V144H152V168ZM192 208H168V184H192V208ZM192 168H168V144H192V168ZM192 256H128C119.164 256 112 263.164 112 272V336C112 344.836 119.164 352 128 352H192C200.836 352 208 344.836 208 336V272C208 263.164 200.836 256 192 256ZM192 336H128V272H192V336ZM256 128C247.164 128 240 135.164 240 144V208C240 216.836 247.164 224 256 224H320C328.836 224 336 216.836 336 208V144C336 135.164 328.836 128 320 128H256ZM280 208H256V184H280V208ZM280 168H256V144H280V168ZM320 208H296V184H320V208ZM320 168H296V144H320V168Z" })
  }
));
PoliceBoxThin.displayName = "PoliceBoxThin";
var PoliceBox_default = PoliceBoxThin;
