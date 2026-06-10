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
var Mailbox_exports = {};
__export(Mailbox_exports, {
  default: () => Mailbox_default
});
module.exports = __toCommonJS(Mailbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MailboxThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 64H144C64.471 64 0 128.473 0 208V384C0 419.348 28.654 448 64 448H512C547.346 448 576 419.348 576 384V208C576 128.473 511.529 64 432 64ZM240 432H64C37.533 432 16 410.469 16 384V208C16 137.422 73.42 80 144 80H160C230.58 80 288 137.422 288 208V384C288 410.469 266.467 432 240 432ZM560 384C560 410.469 538.467 432 512 432H281.928C295.346 420.27 304 403.227 304 384V208C304 151.859 271.553 103.75 224.68 80H432C502.58 80 560 137.422 560 208V384ZM216 192H72C67.578 192 64 195.578 64 200S67.578 208 72 208H216C220.422 208 224 204.422 224 200S220.422 192 216 192ZM488 192H376C371.578 192 368 195.578 368 200S371.578 208 376 208H488C492.406 208 496 211.594 496 216V280H448V248C448 243.578 444.422 240 440 240S432 243.578 432 248V288C432 292.422 435.578 296 440 296H504C508.422 296 512 292.422 512 288V216C512 202.766 501.234 192 488 192Z" })
  }
));
MailboxThin.displayName = "MailboxThin";
var Mailbox_default = MailboxThin;
