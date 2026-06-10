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
var Ethernet_exports = {};
__export(Ethernet_exports, {
  default: () => Ethernet_default
});
module.exports = __toCommonJS(Ethernet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EthernetThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 192H448V160C448 142.326 433.674 128 416 128H384V96C384 78.326 369.674 64 352 64H160C142.326 64 128 78.326 128 96V128H96C78.326 128 64 142.326 64 160V192H32C14.326 192 0 206.326 0 224V416C0 433.672 14.326 448 32 448H480C497.674 448 512 433.672 512 416V224C512 206.326 497.674 192 480 192ZM496 416C496 424.822 488.822 432 480 432H408V328C408 323.594 404.422 320 400 320S392 323.594 392 328V432H312V328C312 323.594 308.422 320 304 320S296 323.594 296 328V432H216V328C216 323.594 212.422 320 208 320S200 323.594 200 328V432H120V328C120 323.594 116.422 320 112 320S104 323.594 104 328V432H32C23.178 432 16 424.822 16 416V224C16 215.178 23.178 208 32 208H80V160C80 151.178 87.178 144 96 144H144V96C144 87.178 151.178 80 160 80H352C360.822 80 368 87.178 368 96V144H416C424.822 144 432 151.178 432 160V208H480C488.822 208 496 215.178 496 224V416Z" })
  }
));
EthernetThin.displayName = "EthernetThin";
var Ethernet_default = EthernetThin;
