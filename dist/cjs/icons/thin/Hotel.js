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
var Hotel_exports = {};
__export(Hotel_exports, {
  default: () => Hotel_default
});
module.exports = __toCommonJS(Hotel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HotelThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M300 296H340C351.031 296 360 287.031 360 276V236C360 224.969 351.031 216 340 216H300C288.969 216 280 224.969 280 236V276C280 287.031 288.969 296 300 296ZM296 236C296 233.781 297.781 232 300 232H340C342.219 232 344 233.781 344 236V276C344 278.219 342.219 280 340 280H300C297.781 280 296 278.219 296 276V236ZM300 168H340C351.031 168 360 159.031 360 148V108C360 96.969 351.031 88 340 88H300C288.969 88 280 96.969 280 108V148C280 159.031 288.969 168 300 168ZM296 108C296 105.781 297.781 104 300 104H340C342.219 104 344 105.781 344 108V148C344 150.219 342.219 152 340 152H300C297.781 152 296 150.219 296 148V108ZM172 296H212C223.031 296 232 287.031 232 276V236C232 224.969 223.031 216 212 216H172C160.969 216 152 224.969 152 236V276C152 287.031 160.969 296 172 296ZM168 236C168 233.781 169.781 232 172 232H212C214.219 232 216 233.781 216 236V276C216 278.219 214.219 280 212 280H172C169.781 280 168 278.219 168 276V236ZM172 168H212C223.031 168 232 159.031 232 148V108C232 96.969 223.031 88 212 88H172C160.969 88 152 96.969 152 108V148C152 159.031 160.969 168 172 168ZM168 108C168 105.781 169.781 104 172 104H212C214.219 104 216 105.781 216 108V148C216 150.219 214.219 152 212 152H172C169.781 152 168 150.219 168 148V108ZM504 496H480V16H504C508.418 16 512 12.418 512 8S508.418 0 504 0H8C3.582 0 0 3.582 0 8S3.582 16 8 16H32V496H8C3.582 496 0 499.582 0 504S3.582 512 8 512H504C508.418 512 512 508.418 512 504S508.418 496 504 496ZM296 496H216V440C216 417.938 233.938 400 256 400S296 417.938 296 440V496ZM464 496H312V440C312 409.125 286.875 384 256 384S200 409.125 200 440V496H48V16H464V496ZM157.906 389.344C156.438 393.5 158.625 398.062 162.781 399.531C167.016 401.031 171.531 398.844 173 394.656C185.406 359.562 218.766 336 256 336S326.594 359.562 339 394.656C340.172 397.938 343.25 400 346.547 400C347.437 400 348.328 399.844 349.219 399.531C353.375 398.063 355.562 393.5 354.094 389.344C339.422 347.875 300 320 256 320S172.578 347.875 157.906 389.344Z" })
  }
));
HotelThin.displayName = "HotelThin";
var Hotel_default = HotelThin;
