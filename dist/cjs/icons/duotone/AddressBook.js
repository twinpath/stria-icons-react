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
var AddressBook_exports = {};
__export(AddressBook_exports, {
  default: () => AddressBook_default
});
module.exports = __toCommonJS(AddressBook_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AddressBookDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 0H80C53.49 0 32 21.49 32 48V464C32 490.51 53.49 512 80 512H400C426.51 512 448 490.51 448 464V48C448 21.49 426.51 0 400 0ZM240 128C275.348 128 304 156.654 304 192S275.348 256 240 256C204.656 256 176 227.346 176 192S204.656 128 240 128ZM336 384H144C135.164 384 128 376.836 128 368C128 323.816 163.82 288 208 288H272C316.184 288 352 323.816 352 368C352 376.836 344.836 384 336 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 256C275.348 256 304 227.346 304 192S275.348 128 240 128C204.656 128 176 156.654 176 192S204.656 256 240 256ZM272 288H208C163.82 288 128 323.816 128 368C128 376.836 135.164 384 144 384H336C344.836 384 352 376.836 352 368C352 323.816 316.184 288 272 288ZM496 64H448V160H496C504.836 160 512 152.836 512 144V80C512 71.164 504.836 64 496 64ZM496 320H448V416H496C504.836 416 512 408.836 512 400V336C512 327.164 504.836 320 496 320ZM496 192H448V288H496C504.836 288 512 280.836 512 272V208C512 199.164 504.836 192 496 192Z" })
    ]
  }
));
AddressBookDuotone.displayName = "AddressBookDuotone";
var AddressBook_default = AddressBookDuotone;
