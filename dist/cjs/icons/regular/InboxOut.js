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
var InboxOut_exports = {};
__export(InboxOut_exports, {
  default: () => InboxOut_default
});
module.exports = __toCommonJS(InboxOut_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxOutRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 320H368C358.906 320 350.594 325.125 346.531 333.281L321.156 384H190.844L165.469 333.281C161.406 325.125 153.094 320 144 320H32C14.328 320 0 334.326 0 352V448C0 483.346 28.654 512 64 512H448C483.348 512 512 483.346 512 448V368C512 341.49 490.51 320 464 320ZM464 448C464 456.822 456.822 464 448 464H64C55.178 464 48 456.822 48 448V368H129.156L154.531 418.719C158.594 426.875 166.906 432 176 432H336C345.094 432 353.406 426.875 357.469 418.719L382.844 368H464V448ZM169.594 152.344L232 85.131V296C232 309.25 242.75 320 256 320S280 309.25 280 296V85.131L342.406 152.344C347.156 157.438 353.562 160 360 160C365.844 160 371.719 157.875 376.344 153.594C386.031 144.562 386.594 129.375 377.594 119.656L273.594 7.656C264.469 -2.094 247.531 -2.094 238.406 7.656L134.406 119.656C125.406 129.375 125.969 144.562 135.656 153.594C145.375 162.594 160.531 162.062 169.594 152.344Z" })
  }
));
InboxOutRegular.displayName = "InboxOutRegular";
var InboxOut_default = InboxOutRegular;
