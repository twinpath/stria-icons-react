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
var Fax_exports = {};
__export(Fax_exports, {
  default: () => Fax_default
});
module.exports = __toCommonJS(Fax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 432H384C392.875 432 400 424.875 400 416V384C400 375.125 392.875 368 384 368H352C343.125 368 336 375.125 336 384V416C336 424.875 343.125 432 352 432ZM352 336H384C392.875 336 400 328.875 400 320V288C400 279.125 392.875 272 384 272H352C343.125 272 336 279.125 336 288V320C336 328.875 343.125 336 352 336ZM256 336H288C296.875 336 304 328.875 304 320V288C304 279.125 296.875 272 288 272H256C247.125 272 240 279.125 240 288V320C240 328.875 247.125 336 256 336ZM464 192H176.008L175.998 48H398.061L432 81.943V160H480V81.943C480 69.213 474.943 57.006 465.943 48.004L432.004 14.061C423.002 5.057 410.793 0 398.061 0H175.998C149.488 0 127.998 21.492 127.998 48.002L128.004 130.264C122.859 128.932 117.561 128 112 128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H464C490.469 512 512 490.469 512 464V240C512 213.531 490.469 192 464 192ZM128 448C128 456.822 120.822 464 112 464H64C55.178 464 48 456.822 48 448V192C48 183.178 55.178 176 64 176H112C120.822 176 128 183.178 128 192V448ZM464 464H173.736C175.068 458.857 176 453.559 176 448V240H464V464ZM256 432H288C296.875 432 304 424.875 304 416V384C304 375.125 296.875 368 288 368H256C247.125 368 240 375.125 240 384V416C240 424.875 247.125 432 256 432Z" })
  }
));
FaxRegular.displayName = "FaxRegular";
var Fax_default = FaxRegular;
